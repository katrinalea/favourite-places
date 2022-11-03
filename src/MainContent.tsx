import FavePlaces from "./utils/place.temp";

function MainContent(): JSX.Element {
  return (
    <main>
      <FavePlaces
        image="https://th.bing.com/th/id/OIP.SeThF0lWfP3Uov18F2r7bgHaE8?w=260&h=180&c=7&r=0&o=5&pid=1.7"
        place="Iguazu Falls"
        location="Argentina/Brazil"
        link="https://www.google.com/maps/place/Iguazu+Falls/@-25.695259,-54.4366662,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x917b75179c5e987e!8m2!3d-25.695259!4d-54.4366662"
        description="One of the wonders of the world, a breathtaking experience!"
      />

      <FavePlaces
        image="https://www.bing.com/th?id=OIP.z9zYsN2FfHtdGwSBnf6SzAHaDU&w=350&h=156&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        place="Ibiza"
        location="Spanish Island"
        link="https://www.google.com/maps/place/Ibiza/@38.9742588,1.2769617,11z/data=!3m1!4b1!4m5!3m4!1s0x1299476385093943:0x9064725cd8426d6!8m2!3d39.0200099!4d1.4821482"
        description="The party island of the world, the best vibes there."
      />

      <FavePlaces
        image="https://th.bing.com/th/id/OIP.7LCLTJFWvmRx2mLaKcERvAHaEo?w=259&h=180&c=7&r=0&o=5&pid=1.7"
        place="Prague"
        location="Czech Republic"
        link="https://www.google.co.uk/maps/place/Prague,+Czechia/@50.0595849,14.3251991,11z/data=!3m1!4b1!4m5!3m4!1s0x470b939c0970798b:0x400af0f66164090!8m2!3d50.0755381!4d14.437800"
        description="One of the prettiest European cities with so much to do and so much history to explore"
      />

      <FavePlaces
        image="https://th.bing.com/th/id/OIP.NExrJiVO9f5xTScypV_q5wHaE8?w=267&h=180&c=7&r=0&o=5&pid=1.7"
        place="New Brighton"
        location="Wirral, England"
        link="https://www.google.co.uk/maps/place/New+Brighton,+Wallasey/@53.4352573,-3.0612662,15z/data=!3m1!4b1!4m5!3m4!1s0x487b268284e7f2a7:0x260cf99ff4a3afe1!8m2!3d53.4354591!4d-3.0508329"
        description="The promonade is right infront of my home and it makes for the most beautiful walks"
      />
    </main>
  );
}

export default MainContent;
