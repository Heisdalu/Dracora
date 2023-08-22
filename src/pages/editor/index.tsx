import React, { FC, useEffect, useState } from "react";
import HomePageContainer from "@/components/HomePage/HomePageContainer";
import EditorComponent from "../../components/Editor/Editor.jsx";

const Editor: FC = () => {
  const [ready, setReady] = useState(false);
  
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div>
      <HomePageContainer>
        {ready && (
          <div className="positive z-[1] bg-white p-1 md:p-2 space-y-1 rounded-[24px]">
            <h1 className="text-otherHeader text-30px font-[800]">Editor</h1>
            <EditorComponent />
          </div>
        )}
      </HomePageContainer>
    </div>
  );
};
export default Editor;
