const Background: React.FC = ({ children }) => (
  <div className=" bg-gradient-to-r from-purple-100 via-purple-200 to-blue-200 dark:from-purple-900 dark:via-purple-800 dark:to-blue-900">
    {children}
  </div>
);

export default Background;
