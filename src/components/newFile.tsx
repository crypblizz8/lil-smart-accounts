import { useEffect } from "react";
import { createBiconomySmartAccount } from "./Biconomy";

useEffect(() => {
  createBiconomySmartAccount();
}, []);
