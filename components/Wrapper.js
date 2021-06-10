const Wrapper = ({ children }) => {
  return (
    <div className="relative flex flex-col w-full min-h-screen overflow-hidden">
      {children}
    </div>
  );
};

export default Wrapper;
