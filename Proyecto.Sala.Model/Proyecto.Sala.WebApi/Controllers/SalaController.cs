using Proyecto.Sala.Model.Entidades;
using Proyecto.Sala.Model.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Proyecto.Sala.WebApi.Controllers
{
    public class SalaController : BaseController
    {

        private ISalaRepository repository;

        public SalaController(ISalaRepository repository)
        {
            if (repository == null)
                throw new ArgumentNullException("repository error");

            this.repository = repository;
        }

        [HttpGet]
        [Route("api/sala")]

        public IHttpActionResult GetSalas()
        {
            return Ok(this.repository.GetSalas());
        }


        [HttpPost]
        [Route("api/sala/guardar")]
        public IHttpActionResult PostSala(SalaEntidad salaEntidad)
        {
            if (salaEntidad == null) return NotFound();
            this.repository.PostSala(salaEntidad);
            return Ok();
        }
        [HttpDelete]
        [Route("api/sala/eliminar")]
        public IHttpActionResult DeleteSala(string id)
        {
            
            if (int.Parse(id) == 0) return NotFound();
            this.repository.DeleteSala(int.Parse(id));
            return Ok();
        }

        [HttpPut]
        [Route("api/sala/modificar")]
        public IHttpActionResult UpdateSala(SalaEntidad salaEntidad)
        {
            this.repository.PutSala(salaEntidad);
            return Ok();
        }
    }
}
