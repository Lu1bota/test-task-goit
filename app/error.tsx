"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MdErrorOutline } from "react-icons/md";
import css from "./error.module.css";
import Container from "@/components/Container/Container";

interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: GlobalErrorProps) {
  const router = useRouter();

  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <Container>
      <div className={css.body}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className={css.card}
        >
          <MdErrorOutline size={48} color="#e63946" />
          <h1 className={css.title}>Упс! Щось пішло не так</h1>
          <p className={css.message}>{error.message}</p>

          <div className={css.actions}>
            <button onClick={reset} className={css.button}>
              Спробувати ще раз
            </button>
            <button onClick={() => router.push("/")} className={css.link}>
              На головну
            </button>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
