import { notFound } from "next/navigation";
import { supabase } from "./supabase";

export const getrooms = async function () {
  const { data, error } = await supabase
    .from("rooms")
    .select("id, name, maxCapacity, regularPrice, discount, image")
    .order("name");

  if (error) {
    console.error(error);
    throw new Error("rooms could not be loaded");
  }

  return data;
};

export async function getRoom(id: number) {
  const { data, error } = await supabase
    .from("rooms")
    .select("*")
    .eq("id", id)
    .single();

  // For testing
  // await new Promise((res) => setTimeout(res, 1000));

  if (error) {
    notFound();
  }

  return data;
}
