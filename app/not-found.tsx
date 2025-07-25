"use client";

import { motion } from "framer-motion";
import { MdHome } from "react-icons/md";
import { useRouter } from "next/navigation";
import css from "./not-found.module.css";

export default function NotFoundPage() {
  const router = useRouter();
  function handleBack() {
    router.push("/");
  }
  return (
    <div className={css.wrapper}>
      <motion.h1
        initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
        animate={{ scale: 1.2, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className={css.code}
      >
        404 - Сторінку не знайдено
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={css.message}
      >
        Вибачте, сторінка, яку ви шукаєте, не існує.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <button className={css.button} onClick={handleBack}>
          <MdHome size={24} />
          На головну
        </button>
      </motion.div>
    </div>
  );
}
