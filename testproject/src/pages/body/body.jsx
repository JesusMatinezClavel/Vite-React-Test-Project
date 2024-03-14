import { Routes, Route } from "react-router-dom";
import { Home } from "../home/home";
import { Counters } from "../counters/counters";
import { Apitest } from "../apitest/apitest";

export const Body = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counters" element={<Counters />} />
            <Route path="/apitest" element={<Apitest />} />
        </Routes>
    )
}