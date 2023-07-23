"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("3cc8715f-afa2-4490-b17a-a51f9b1c81dd");
  }, []);

  return null;
};