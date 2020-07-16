using CommonServiceLocator;
using Proyecto.Sala.Model.Interfaces;
using Proyecto.Sala.Repositorio.Repositorios;
using System.Web.Http;
using Unity;
using Unity.ServiceLocation;
using Unity.WebApi;

namespace Proyecto.Sala.WebApi
{
    public static class UnityConfig
    {
        private static IUnityContainer container;
        public static void RegisterComponents()
        {
                container = new UnityContainer();
                container.RegisterType<ISalaRepository, SalaRepository>();
                var locator = new UnityServiceLocator(container);
                ServiceLocator.SetLocatorProvider(() => locator);

                GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);

        }

        public static IUnityContainer GetUnityContainer()
        {
            return container;
        }
    }
}