import likeIcon from '../assets/likeIcon.svg';
import dislikeIcon from '../assets/dislikeIcon.svg';

function MeGusta({ setLike, like }) {
  function cambiarState() {
    setLike(!like);
  }
  return (
    <button
      onClick={cambiarState}
      className={`w-full hover:shadow-green-600/50 shadow-lg shadow-green-600/20 ${
        like ? 'bg-green-600' : 'bg-red-600'
      } text-white flex gap-4 justify-center py-5 mt-5 rounded-lg`}
    >
      <div className='uppercase font-bold text-4xl'>
        {like ? 'Me gusta' : 'No me gusta'}
      </div>
      <div className='ml-1'>
        <img src={like ? likeIcon : dislikeIcon} alt='' className='w-10 h-10' />
      </div>
    </button>
  );
}

export default MeGusta;
