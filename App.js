import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../note";

function App() {
  return (
    <div>
      <Header />
      {notes.map((item) => {
        <Note
          key={item.key}
          title={item.title}
          content={item.content}
        /> 
      })}
      <Footer />
    </div>
  );
}

export default App;






// function creatnote(item){
//   console.log(item);
//   return (
//     <Note
//       key={item.key}
//       title={item.title}
//       content={item.content}
//     />
//   )
// }

// function App() {
//   return (
//     <div>
//       <Header />
//       {notes.map(creatnote)}
//       <Footer />
//     </div>
//   );
// }

// export default App;
