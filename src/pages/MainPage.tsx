import {TitlePage} from "./TitlePage/TitlePage.tsx";
import {WeddingSlider} from "../components/WeddingSlider/WeddingSlider.tsx";
import {CommonLayout} from "../layout/CommonLayout.tsx";
import {LocationPage} from "./LocationPage/LocationPage.tsx";

export const MainPage = () => {
  return (
    <>
      <CommonLayout>
      <TitlePage/>
      </CommonLayout>
      <WeddingSlider/>
      <LocationPage/>
    </>
  );
};