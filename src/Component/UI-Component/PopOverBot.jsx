import { useState, useRef, useEffect } from "react";
import { Bot, ChevronDown, Send } from "lucide-react";
import { CompanyInfo } from "./companyinfo";
import logo from "../../../public/asset/Image/Logo.png";

const PopOverBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hey there 👋\nHow can I help you today?", model: "model" },
  ]);
  const [input, setInput] = useState("");
  const popoverRef = useRef(null);
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const formatText = (text) => {
    if (!text) return "";
    return text
      .replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>") // bold + italic
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // bold
      .replace(/\*(.*?)\*/g, "<em>$1</em>");
  };

async function generateBotResponse(mesage) {
  console.log(mesage);

  const updateHistory = (text) => {
    setMessages((prev) => [
      ...prev.filter((msg) => msg.text !== "Thinking..."),
      { model: "model", text },
    ]);
  };

  const systemPrompt = {
    role: "user",
    parts: [{ text: CompanyInfo }],
  };

  mesage = mesage.map(({ text, model }) => ({
    role: model === "user" ? "user" : "model",
    parts: [{ text }],
  }));

  const contents = [systemPrompt, ...mesage];

  const requestOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents }),
  };

  try {
    const response = await fetch(import.meta.env.VITE_API_URL, requestOption);
    const data = await response.json();

    if (!response.ok)
      throw new Error(data.error.message || "something went wrong");

    const apiResponseText = data.candidates[0].content.parts[0].text.trim();

    // Ambil semua ID produk dari text
    const productPattern = /SHOW_PRODUCT:(\d+)/g;
    const productIds = [...apiResponseText.matchAll(productPattern)].map((match) => match[1]);

    // Bersihkan teks untuk ditampilkan
    const cleanedText = apiResponseText.replace(/SHOW_PRODUCT:\d+/g, "").trim();

    if (cleanedText) {
      const formattedText = formatText(cleanedText);
      updateHistory(formattedText);
    }

    // Ambil dan render produk
    if (productIds.length > 0) {
      const productElements = await Promise.all(
        productIds.map(async (id) => {
          try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            const product = await res.json();

            return `
              <div class="rounded-lg bg-white shadow p-3 border border-gray-200 flex flex-col justify-center items-center mb-3">
                <img 
                  src="${product.image}" 
                  alt="${product.title}" 
                  class="w-[100px] h-auto rounded-md mb-3 object-contain"
                />
                <h3 class="text-base font-semibold text-gray-800">${product.title}</h3>
                <p class="text-sm text-gray-600 mb-2 mt-2 line-clamp-4">${product.description}</p>
                <p class="text-sm font-semibold text-brown-300 self-start">Price: $${product.price}</p>
              </div>
            `;
          } catch (error) {
            console.error(error);
            return `<p class="text-sm text-red-500">❌ Gagal mengambil produk dengan ID ${id}</p>`;
          }
        })
      );

      // Gabungkan dan update sekaligus
      const combinedHTML = productElements.join("");
      updateHistory(combinedHTML);
    }
  } catch (err) {
    console.error(err);
    updateHistory("❌ Terjadi kesalahan saat memproses permintaan.");
  }
}


  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user message
    setMessages([...messages, { text: input, model: "user" }]);

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "Thinking...", model: "bot" }]);

      generateBotResponse([...messages, { text: input, model: "user" }]);
    }, 1000);

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative  ">
      {/* Chat button */}
      <button
        onClick={togglePopover}
        className="group mb-6 text-xl bg-white border-black hover:border-brown-100 transition-colors duration-300 ease-in border-3 rounded-full w-auto h-auto p-3 relative overflow-hidden font-poppins font-semibold flex items-center justify-center gap-2"
      >
        <span className="relative z-10 transition-all duration-300 flex items-center gap-2 text-black group-hover:text-white">
          <Bot /> Chat Bot
        </span>
        <div className="absolute inset-0 bg-brown-300 translate-x-full scrollbar-hide rounded-full group-hover:translate-x-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
      </button>

      {/* Popover content */}
      {isOpen && (
        <div
          ref={popoverRef}
          className="absolute bottom-20 right-0 w-80 md:w-96 bg-white rounded-lg shadow-lg flex flex-col  "
          style={{ height: "500px" }}
        >
          {/* Header */}
          <div className="bg-brown-300 p-3 text-white font-montserrat flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full p-1 flex items-center justify-center">
                <Bot size={20} className="text-brown-300" />
              </div>
              <span className="font-semibold">Chatbot</span>
            </div>
            <ChevronDown
              size={20}
              className="cursor-pointer"
              onClick={togglePopover}
            />
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 flex flex-col gap-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-end ${
                  message.model === "user" ? "justify-end rounded-br-none" : "rounded-bl-none justify-start"
                } gap-2`}
              >
                {/* Profile picture untuk model */}
                {message.model === "model" && (
                  <img
                    src={logo}
                    alt="model"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}

                {/* Bubble pesan */}
                {message.model === "model" ? (
                  <div
                    className="max-w-xs rounded-lg p-3 whitespace-pre-wrap break-words bg-brown-300/80 text-white"
                    dangerouslySetInnerHTML={{ __html: message.text || "" }}
                  />
                ) : (
                  <div className="max-w-xs rounded-lg p-3 whitespace-pre-wrap break-words bg-brown-100 text-white">
                    {message.text}
                  </div>
                )}

                {/* Profile picture untuk user */}
                {message.model === "user" && (
                  <img
                    src="https://i.pravatar.cc/40"
                    alt="User"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="p-3 border-t border-gray-200">
            <div className="flex relative rounded-full overflow-hidden bg-gray-100">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Message..."
                className="flex-1 p-3 bg-transparent font-poppins focus:outline-none border-none"
              />
              <button
                onClick={handleSendMessage}
                className="bg-transparent p-3 text-gray-500 hover:text-brown-300 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopOverBot;
