using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace angular_complex.Logic.Entities
{
    public class AppUser : IdentityUser
    {
        public string? UserName { get; set; }
    }
}
