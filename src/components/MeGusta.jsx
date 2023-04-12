import likeIcon from '../assets/likeIcon.svg';
import dislikeIcon from '../assets/dislikeIcon.svg';

function MeGusta({ setLike, like, likeColor, setColor }) {

  function cambiarState() {
    setLike(!like);
  }
  function cambiarColor() {
    setLike(!likeColor);
  }
  return (
    <button onClick={cambiarState} className="w-full hover:shadow-green-600/50 shadow-lg shadow-green-600/20 bg-green-600 text-white flex gap-4 justify-center py-5 mt-5 rounded-lg">
      <div className="uppercase font-bold text-4xl">
      {like ? 'Me gusta' : 'No me gusta'}
      </div>
      <div className="ml-1">
        <img src={like ? likeIcon : dislikeIcon} alt="" className='w-10 h-10'/>
      </div>
    </button>
  )
}

export default MeGusta;