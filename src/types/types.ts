export interface Car {
  id: string;
  name: string;
  brand: string;
  type: "Sedan" | "SUV" | "Hatchback" | "Truck" | "Van" | "MiniBus" | "Electric";
  modelYear: number;
  registrationNumber: string;
  seatingCapacity: number;
  fuelType: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  transmission: "Automatic" | "Manual";
  imageUrl?: string;
}
