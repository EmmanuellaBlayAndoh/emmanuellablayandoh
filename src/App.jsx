import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Emmanuella from "./pages/Emmanuella";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/emmanuella" element={<Emmanuella />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Emmanuella from "./pages/Emmanuella";

// function PageTransition({ children }) {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 20,
//       }}
//       animate={{
//         opacity: 1,
//         y: 0,
//       }}
//       exit={{
//         opacity: 0,
//         y: -20,
//       }}
//       transition={{
//         duration: 0.45,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// function AnimatedRoutes() {
//   const location = useLocation();

//   return (
//     <>
//       {/* Navbar stays mounted between pages */}
//       <Navbar />

//       <AnimatePresence mode="wait">
//         <Routes location={location} key={location.pathname}>
//           <Route
//             path="/"
//             element={
//               <PageTransition>
//                 <Hero />
//               </PageTransition>
//             }
//           />

//           <Route
//             path="/emmanuella"
//             element={
//               <PageTransition>
//                 <Emmanuella />
//               </PageTransition>
//             }
//           />

//           {/* Add your works page here later */}
//           {/* 
//           <Route
//             path="/works"
//             element={
//               <PageTransition>
//                 <Works />
//               </PageTransition>
//             }
//           />
//           */}
//         </Routes>
//       </AnimatePresence>
//     </>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <AnimatedRoutes />
//     </BrowserRouter>
//   );
// }

// export default App;

