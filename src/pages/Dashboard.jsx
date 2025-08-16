import { useNavigate } from 'react-router-dom';
import supabase from '../helper/supabaseClient';

function Dashboard() {
    const navigate = useNavigate();

    const signOut = async () => {
        const {error} = await supabase.auth.signOut();
        if (error) {
            console.error("Error signing out:", error.message);
        }
        navigate("/login");
    };


  return (
    <div>
      <h1>Hello? u are logged in.</h1>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default Dashboard;
