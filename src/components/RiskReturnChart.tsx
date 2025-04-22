interface RiskReturnChartProps {
  riskLevel: 'Bajo' | 'Medio' | 'Alto';
  returnRate?: string;
}

const RiskReturnChart = ({ riskLevel, returnRate }: RiskReturnChartProps) => {
  const getRiskPosition = () => {
    switch (riskLevel) {
      case 'Bajo':
        return 'left-1/4';
      case 'Medio':
        return 'left-1/2';
      case 'Alto':
        return 'left-3/4';
      default:
        return 'left-1/2';
    }
  };

  const getReturnPosition = () => {
    if (!returnRate) return 'bottom-1/4';
    const rate = parseFloat(returnRate.replace('%', ''));
    if (rate <= 5) return 'bottom-1/4';
    if (rate <= 10) return 'bottom-1/2';
    return 'bottom-3/4';
  };

  return (
    <div className="relative w-full h-64 bg-gray-100 rounded-lg p-4">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full border border-gray-300 rounded-lg relative">
          {/* Risk Axis */}
          <div className="absolute top-0 left-0 right-0 h-8 flex justify-between items-center px-2">
            <span className="text-xs text-gray-600">Bajo Riesgo</span>
            <span className="text-xs text-gray-600">Alto Riesgo</span>
          </div>
          
          {/* Return Axis */}
          <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between items-center py-2">
            <span className="text-xs text-gray-600 rotate-90 origin-left">Alto Retorno</span>
            <span className="text-xs text-gray-600 rotate-90 origin-left">Bajo Retorno</span>
          </div>

          {/* Point */}
          <div
            className={`absolute ${getRiskPosition()} ${getReturnPosition()} w-4 h-4 rounded-full bg-blue-600 transform -translate-x-1/2 translate-y-1/2`}
          />
        </div>
      </div>
    </div>
  );
};

export default RiskReturnChart; 