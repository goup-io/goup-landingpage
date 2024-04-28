import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MediaQuery from 'react-responsive';

function Section01() {
  return (
    <>
      <MediaQuery maxWidth={1024}>
        <section className="font-Poppins text-center mt-60">
          <p className="text-3xl">
            Em direção ao <span className="font-bold text-verdeGoUp">Futuro</span>
          </p>
          <p className="text-2xl font-extralight mt-8">
            Construímos aplicações que <br></br>mudam a sociedade
          </p>
        </section>
      </MediaQuery>
      <MediaQuery minWidth={1025}>
        <section className="font-Poppins text-center mt-60">
          <p className="text-7xl">
            Em direção ao <span className="font-bold text-verdeGoUp">Futuro</span>
          </p>
          <p className="text-5xl font-extralight mt-8">
            Construímos aplicações que <br></br>mudam a sociedade
          </p>
        </section>
      </MediaQuery>
    </>
  );
}

export default Section01;