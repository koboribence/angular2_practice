using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace angular_complex.Other.Entities
{
    public class LoginResultDto
    {
        public string Token { get; set; } = "";
        public DateTime Expiration { get; set; }
    }
}
