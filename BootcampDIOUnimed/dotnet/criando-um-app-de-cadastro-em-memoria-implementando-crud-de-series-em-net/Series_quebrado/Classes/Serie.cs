using System;
using System.Collections.Concurrent;

namespace Series
{
    public class Serie : BaseEntity
    {
        private Genre Genre { get; set; }
        private string Title { get; set; }
        private string Description { get; set; }
        private int Year { get; set; }
        private bool Excluded { get; set; }

        // Methods
        public Serie(int id, Genre genero, string title, string description, int year)
        {
            this.Id = id;
            this.Genre = genero;
            this.Title = title;
            this.Description = description;
            this.Year = year;
            this.Excluded = false;
        }
        public override string ToString()
        {
            string backReturn = "";
            backReturn += "Genre: " + this.Genre + Environment.NewLine;
            backReturn += "Title: " + this.Title + Environment.NewLine;
            backReturn += "Description: " + this.Description + Environment.NewLine;
            backReturn += "Release Year: " + this.Year + Environment.NewLine;
            return backReturn;
        }
        public string returnTitle()
        {
            return this.Title;
        }
        public int returnId()
        {
            return this.Id;
        }
        public void ExcludeBool()
        {
            this.Excluded = true;
        }
    }
}