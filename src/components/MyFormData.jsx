import { useState } from "react";
import { brands } from "../constants";
import { colors } from "../constants";

export default function MyFormData() {
  function handSubmit(event) {
    event.preventDefault();
    const res = new FormData(event.target);
    console.log(res.get("brand"),res.get("colorCar") , res.get("cars"));
  }

  return (
    <div className="base-container flex justify-center mt-5">
      <form onSubmit={handSubmit} className="w-full max-w-96">
        <h2 className="font-semibold text-2xl mb-5">Yangi mashina qo'shish</h2>
        <div className="flex flex-col gap-5">
          <input
            name="cars"
            type="text"
            placeholder="Type your todos"
            className="input input-bordered input-success w-full"
          />
          <select defaultValue="Mashina brendini tanlang*" name="brand" className="select select-error w-full">
            <option disabled >
              Mashina brendini tanlang*
            </option>
            {brands.map((brand) => {
              return <option key={brand} value={brand}>{brand}</option>
            })}
          </select>
          <select defaultValue="Mashina rangini tanlang*" name="colorCar" className="select select-primary w-full">
            <option disabled >
              Mashina rangini tanlang*
            </option>
            {colors.map((colorCar) => {
              return <option key={colorCar} value={colorCar}>{colorCar}</option>
            })}
          </select>
          <button className="btn btn-outline btn-accent" type="submit">
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}
