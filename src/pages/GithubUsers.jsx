import { useEffect, useState } from "react";
const myUrl = "https://api.github.com/users";
console.log(myUrl);

const GithubUsers = () => {
  const [users, setUsers] = useState([]);
  const [originalUsers, setOriginalUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(myUrl);
        const users = await response.json();
        setUsers(users);
        setOriginalUsers(users);
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

    const handleDelete = (id) => {
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    };


      const handleReload = () => {
    setUsers(originalUsers);  
  };

  return (
    <div className="list">
      {users.map((user) => {
        const { login, id, avatar_url, html_url } = user;
        return (
          <ul key={id}>
            <li>
              <div className="card">
                <img src={avatar_url} alt={login} height="90px" />
                <h1>{login}</h1>
                <a target="_blank" href={html_url}>Take me to {login} page</a>
                <button onClick={() => handleDelete(id)}>Delete</button>
              </div>
              {/* <div className="card">
                <h1>{login}</h1>
                <a href={html_url}>Take me to {login} page</a>
                <button onClick={() => handleDelete(id)}>Delete</button>
              </div> */}
            </li>
          </ul>
        );
      })}
      {users.length < originalUsers.length && (
        <button onClick={handleReload}>Reload List</button>
      )}
    </div>
  );
};

export default GithubUsers;
