//(Name, Location, Genre, Seeking, Skills, Commitment level, goals, about

class Profile {
  constructor(
    id, 
    name,
    location,
    imageUrl,
    genre,
    inspiration,
    seeking,
    skills,
    goals,
    about,
    
    )
    {
      this.id = id;
      this.name = name;
      this.location = location;
      this.imageUrl = imageUrl;
      this.genre = genre;
      this.inspiration = inspiration;
      this.seeking = seeking;
      this.skills = skills;
      this.goals = goals;
      this.about = about;
    }
}
export  default Profile