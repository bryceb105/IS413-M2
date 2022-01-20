﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IS413_M2.Models
{
    public class GradeScaleModel
    {
        [Range(0, 100)]
        //getters + setters
        public int Assignment { get; set; }

        [Range(0, 100)]
        public int Group { get; set; }

        [Range(0, 100)]
        public int Quiz { get; set; }


        [Range(0, 100)]
        public int Exam { get; set; }

        [Range(0, 100)]
        public int Intex { get; set; }
    }
}
