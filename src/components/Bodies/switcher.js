import './switcher.css';

function Switcher({ switcherPosition, isMan }) {

  const handleToggle = () => {
    switcherPosition()
  };

  return (
    <div className='switcher'>
      <input
        type="checkbox"
        id="toggle"
        className="toggle-input"
        checked={isMan}
        onChange={handleToggle}
      />
      <label htmlFor="toggle" className="toggle-label"></label>
 
    </div>  
   

  );
}

export default Switcher;

