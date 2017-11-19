using System;

namespace Aplikacja_Internetowa_Zdrowie_Aktywnosc.Models
{
    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}