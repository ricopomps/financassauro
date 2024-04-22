import { TooManyRequestsError } from "@/network/http-errors";
import { AxiosError, isAxiosError } from "axios";
import { clsx, type ClassValue } from "clsx";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMoney(amount: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);
}

export function handleError(error: unknown) {
  if (error instanceof TooManyRequestsError) {
    toast.error("Too many requests, please wait a while");
  } else if (isAxiosError(error)) {
    const axiosError = error as AxiosError<{ error: string }>;
    if (axiosError.response?.data?.error) {
      toast.error(axiosError.response.data.error);
    } else {
      toast.error("An error occurred.");
    }
  } else if (error instanceof Error) {
    toast.error(error.message);
  } else if (typeof error === "string") {
    toast.error(error);
  } else {
    toast.error("An error occurred.");
  }
}
