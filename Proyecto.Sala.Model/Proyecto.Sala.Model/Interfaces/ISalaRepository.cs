using Proyecto.Sala.Model.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Proyecto.Sala.Model.Interfaces
{
    public interface ISalaRepository
    {
        List<SalaEntidad> GetSalas();

        SalaEntidad GetSalaID(int id);

        void PostSala(SalaEntidad salaEntidad);

        void PutSala(SalaEntidad salaEntidad);

        void DeleteSala(int id);
    }
}
