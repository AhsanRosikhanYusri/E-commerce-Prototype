
const ProgressSteps = ({currentStep = 4}) => {
  const steps = [
    { id: 1, title: "Confirmation Order", description: "Confirmation Your Order" },
    { id: 2, title: "Packaging", description: "Packaging the product" },
    { id: 3, title: "Delivery", description: "Delivery the order" },
    { id: 4, title: "Delivered", description: "Delivery done" }
  ];

  console.log(currentStep);
  

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 relative">
      {/* Desktop Layout */}
      <div className="hidden md:block md:justify-center items-center md:ml-[10%]   ">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <div
                  className={`
                    relative z-10 flex items-center justify-center w-15 h-15 rounded-full border-4 transition-all duration-300
                    ${step.id <= currentStep
                      ? 'bg-gradient-to-r from-brown-300 to-amber-800  text-white'
                      : 'bg-white border-gray-300 text-gray-500'
                    }
                    ${step.id === currentStep ? 'ring-4 ring-brown-300' : ''}
                  `}
                >
                  {step.id < currentStep ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <span className="font-semibold">{step.id}</span>
                  )}
                </div>
                
                {/* Step Info */}
                <div className="mt-3 text-center">
                  <h3 className={`font-semibold text-sm font-montserrat ${
                    step.id <= currentStep ? 'text-amber-700' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{step.description}</p>
                </div>
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 mx-2 ">
                  <div
                    className={`h-1 rounded transition-all duration-500 ${
                      step.id < currentStep ? 'bg-amber-700' : 'bg-gray-200'
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-start">
              {/* Step Circle and Line Container */}
              <div className="flex flex-col items-center mr-4">
                <div
                  className={`
                    flex items-center justify-center w-10 h-10 rounded-full border-3 transition-all duration-300
                    ${step.id <= currentStep
                      ? 'bg-amber-700 border-amber-700 text-white'
                      : 'bg-white border-gray-300 text-gray-500'
                    }
                    ${step.id === currentStep ? 'ring-3 ring-brown-300' : ''}
                  `}
                >
                  {step.id < currentStep ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <span className="font-semibold text-sm">{step.id}</span>
                  )}
                </div>
                
                {/* Vertical Line */}
                {index < steps.length - 1 && (
                  <div
                    className={`w-0.5 h-12 mt-2 rounded transition-all duration-500 ${
                      step.id < currentStep ? 'bg-amber-700' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
              
              {/* Step Content */}
              <div className="flex-1 pb-8">
                <h3 className={`font-semibold font-montserrat  ${
                  step.id <= currentStep ? 'text-brown-300' : 'text-gray-500'
                }`}>
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{step.description}</p>
                
                {/* Progress indicator for current step */}
                {step.id === currentStep && (
                  <div className="mt-3">
                    <div className="flex items-center text-sm text-amber-700">
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Progress Summary */}
      <div className="mt-8 bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Overall Progress</span>
          <span className="text-sm text-gray-500">{currentStep} of {steps.length} completed</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-amber-700 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;