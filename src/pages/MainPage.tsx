import {TitlePage} from "./TitlePage/TitlePage.tsx";
import {LocationPage} from "./LocationPage/LocationPage.tsx";
import {AnketaPage} from "./AnketaPage/AnketaPage.tsx";
import {useParams} from "react-router-dom";
import {CalendarPage} from "./CalendarPage/CalendarPage.tsx";
import {ColorsPage} from "./ColorsPage/ColorsPage.tsx";
import {GalleryPage} from "./GalleryPage/GalleryPage.tsx";

export const MainPage = () => {
  const {id} = useParams()

  return (
    <>
      <TitlePage/>
      <CalendarPage/>
      <GalleryPage/>
      <ColorsPage/>
      <LocationPage/>
      <AnketaPage id={id}/>
    </>
  );
};