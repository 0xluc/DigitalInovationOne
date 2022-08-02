using System;
using System.Collections.Generic;
using Series

namespace Series
{
    public class SerieRepository : IRepository<Serie>
    {
        private List<Serie> listSerie = new List<Serie>();
        public void Exclude(int id)
        {
            listSerie[id].ExcludeBool();
        }

        public void Insert(Serie obj)
        {
            listSerie.Add(obj);
        }

        public List<Serie> List()
        {
            return listSerie;
        }

        public int NextId()
        {
            return listSerie.Count;
        }

        public Serie ReturnById(int id)
        {
            return listSerie[id];
        }

        public void Update(int id, Serie obj)
        {
            listSerie[id] = obj;

        }
    }
}