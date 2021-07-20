interface PlayerTypes{
  firstname: string;
  lastname: string;
  age: number;
  birth: {
    date: string;
    place: string;
    country: string;
  };
  height: string;
  weight: string;
  photo: string;
};

export default PlayerTypes