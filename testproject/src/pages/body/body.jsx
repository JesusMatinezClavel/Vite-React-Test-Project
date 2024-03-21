import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../home/home";
import { Counters } from "../counters/counters";
import { Apitest } from "../apitest/apitest";
import { Login } from "../login/Login";
import { Register } from "../register/Register";
import { UserProfile } from "../userprofile/userProfile";

export const Body = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to={"/"} replace />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/users/profile" element={<UserProfile />} />
        </Routes>
    )
}