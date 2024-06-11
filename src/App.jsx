import { CartProvider } from "./CartContext";

import AppContent from "./AppContent";

function App() {
  //tengo que separar esto para utilizar bien el loader
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;