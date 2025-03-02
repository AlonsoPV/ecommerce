import { useSongContext } from "../../Hook/useSongContext";

const SongDetail = () => {
  const {selectedSong} = useSongContext()
  return (
    <>
      {
        selectedSong.title
        ?(
          <div>
            <img src={selectedSong.img_url} alt={selectedSong.title} />
            <h4>{selectedSong.title} </h4>
            <h4>{selectedSong.artist} </h4>
            <h4>{selectedSong.year} </h4>
          </div>
        )
        : <h1>Selecciona una cancion</h1>
      }
    </>
  );
};

export default SongDetail;
