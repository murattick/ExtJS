using System;
using System.Collections.Specialized;
using System.Linq;
using System.Web.Security;
using CustomMembership.Models;

//создание кастомного провайдера ролей от стандартного
namespace SmartCom.Security
{
    public class MyRoleProvider : RoleProvider
    {

        private string _ApplicationName;
        //подключение репозитория
        private UserRepository userRepo = new UserRepository();

        public override void Initialize(string name, NameValueCollection config)
        {
            if (config == null)
                throw new ArgumentNullException("config");

            if (name == null || name.Length == 0)
                name = "CustomRoleProvider";

            if (String.IsNullOrEmpty(config["description"]))
            {
                config.Remove("description");
                config.Add("description", "Custom Role Provider");
            }

            base.Initialize(name, config);

            _ApplicationName = GetConfigValue(config["applicationName"],
                          System.Web.Hosting.HostingEnvironment.ApplicationVirtualPath);

        }

        public override string ApplicationName
        {
            get { return _ApplicationName; }
            set { _ApplicationName = value; }
        }

        //
        //  Хелпер для получение значений из конфигурационного файла.

        private string GetConfigValue(string configValue, string defaultValue)
        {
            if (string.IsNullOrEmpty(configValue))
                return defaultValue;

            return configValue;
        }
        public override void AddUsersToRoles(string[] usernames, string[] roleNames)
        {
            userRepo.AddUsersToRoles(usernames, roleNames);
        }
        public override void CreateRole(string roleName)
        {
            userRepo.CreateRole(roleName);
        }


        public override bool DeleteRole(string roleName, bool throwOnPopulatedRole)
        {
            throw new NotImplementedException();
        }

        public override string[] FindUsersInRole(string roleName, string usernameToMatch)
        {
            throw new NotImplementedException();
        }

        public override string[] GetAllRoles()
        {
            throw new NotImplementedException();
        }

        public override string[] GetRolesForUser(string username)
        {
            var user = userRepo.GetDBUser(username);
            return user.Roles
                .Select(x => x.RoleName).ToArray();
        }

        public override string[] GetUsersInRole(string roleName)
        {
            var role = userRepo.GetRole(roleName);
            var usernames = userRepo.GetAllUsers()
                .Where(x => x.Roles.Contains(role))
                .Select(x => x.UserName);

            return usernames.ToArray();
        }

        public override bool IsUserInRole(string username, string roleName)
        {
            throw new NotImplementedException();
        }

        public override void RemoveUsersFromRoles(string[] usernames, string[] roleNames)
        {
            throw new NotImplementedException();
        }

        public override bool RoleExists(string roleName)
        {
            throw new NotImplementedException();
        }
    }
}