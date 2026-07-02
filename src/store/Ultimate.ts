export function formatPrice(value: number): string {
    if(!value || value === undefined || isNaN(value))
         return "0 VND";

    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(value);
    
  }