import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Heart, LogOut, ChevronRight, History, CircleDollarSign, Settings, Headset } from "lucide-react";


const Profile = () => {
  const navigate = useNavigate();
  
  // Ambil dan parse data dari localStorage
const rawOrder = localStorage.getItem("paymentData");
let order = [];

try {
  const parsed = JSON.parse(rawOrder);
  order = Array.isArray(parsed) ? parsed : []; // hanya lanjut jika array
} catch (error) {
  order = []; 
  console.log(error);
}
    
const rawCart = localStorage.getItem("cart")

let cart = []

try {
const parsedCart = JSON.parse(rawCart);
cart =  Array.isArray(parsedCart) ? parsedCart : [] ;
} catch (error) {
    cart = [];
    console.log(error)
    
}

const rawLiked = localStorage.getItem("liked")
let liked = []

try {
const parsedLike = JSON.parse(rawLiked);
liked =  Array.isArray(parsedLike) ? parsedLike : [] ;
} catch (error) {
    cart = [];
    console.log(error)
    
}

  // Navigation menu items
  const menuItems = [
    {
      icon: <ShoppingCart size={20} color="black" />,
      label: "My Cart",
      path: "/Cart",
    },
    {
      icon: <Heart size={20} color="black" />,
      label: "liked",
      path: "/Liked"
    },
    {
      icon: <CircleDollarSign size={20}  color="black"/>,
      label: "Coupon",
      path: "/coupon"
    },
    {
      icon: <History size={20} color="black"/>,
      label: "Order History",
      path: "/history"
    },
    {
      icon: <Headset size={20} color="black" />,
      label: "Customer Service",
      path: "/cs"
    },
    {
      icon: <Settings size={20}  color="black"/>,
      label: "Account Settings",
      path: "/settings"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-brown-300 shadow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 flex items-center gap-4">
            <button 
              onClick={() => navigate("/home")}
              className="p-2 rounded-full hover:bg-brown-100 transition-colors"
            >
              <ArrowLeft size={20} color="white"  />
            </button>
            <h1 className="text-xl font-semibold font-montserrat text-white">My Profile</h1>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Profile Banner */}
        <div className="bg-gradient-to-r from-brown-300 to-brown-100 rounded-xl shadow-lg mt-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-48 h-48 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute left-0 bottom-0 w-32 h-32 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/4"></div>
          
          <div className="px-6 py-8 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white overflow-hidden shadow-lg">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* User Info */}
            <div className="text-center sm:text-left text-white">
              <h2 className="text-2xl font-bold">John Davis</h2>
              <p className="text-blue-100">john.davis@example.com</p>
            </div>
            
            {/* Edit Button */}
            <div className="sm:ml-auto">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        
        {/* Profile Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <p className="text-2xl font-bold text-brown-300">{cart.length}</p>
            <p className="text-sm text-gray-500">Items Cart</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <p className="text-2xl font-bold text-brown-300">{order.length}</p>
            <p className="text-sm text-gray-500">Order</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <p className="text-2xl font-bold text-brown-300">{liked.length}</p>
            <p className="text-sm text-gray-500">Items Liked</p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="mt-6 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-200">
            {menuItems.map((item, index) => (
              <div 
                key={index}
                onClick={() => navigate(item.path)}
                className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-blue-600">
                    {item.icon}
                  </div>
                  <span className="font-medium text-gray-700">{item.label}</span>
                  
                  {item.badge && (
                    <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-blue-600 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
                <ChevronRight size={18} className="text-gray-400" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Logout Button */}
        <div className="mt-6">
          <button 
            onClick={() => navigate("/")}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white rounded-xl shadow-sm hover:bg-gray-50 transition-colors text-red-500 font-medium"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;