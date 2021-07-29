const csv={template:`
<div>
                <td width=350>
                <div class="d-flex flex-row">
                    <input class="form-control m-2"
                    v-model="FilterVariable"
                    v-on:keyup="FilterFn()"
                    placeholder="Search By First Name, Last Name Or Email">
                </div>
                </td>


<table class="table table-striped">
<thead>
    <tr>
        <th>
            Emp_Id
        </th>
        <th>
           Name_Prefix
        </th>
        <th>
            First_Name
        </th>
        <th>
            Middle_Initial
        </th>
        <th>
            Last_Name
        </th>
        <th>
            Gender
        </th>
        <th>
            Email
        </th>
        <th>
            Father_Name
        </th>
        <th>
            Mother_Name
        </th>
         <th>
            View
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="x in csv">
        <td>{{x.Emp_ID}}</td>
        <td>{{x.Name_Prefix}}</td>
        <td>{{x.First_Name}}</td>
        <td>{{x.Middle_Initial}}</td>
        <td>{{x.Last_Name}}</td>
        <td>{{x.Gender}}</td>
        <td>{{x.Email}}</td>
        <td>{{x.Father_Name}}</td>
        <td>{{x.Mother_Name}}</td>
        <td><button type="button"
            class="btn btn-light mr-1"
             data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            @click="ViewClick(x)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
        </td>
</tbody>
</thead>
</table>
<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true" style="left-margin:20px;right-margin:20px;">
    <div class="modal-dialog modal-lg ">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="input-group mb-3">
     <table class="table table-striped">
<thead>
    <tr>
        <th>
            Emp_Id
        </th>

        <th>
            First_Name
        </th>
        <th>
            Middle_Initial
        </th>
        <th>
            Last_Name
        </th>
        <th>
            Gender
        </th>
        <th>
            Email
        </th>

    </tr>
</thead>
<tbody>
    <tr>

        <td>{{Emp_ID}}</td>
        <td>{{First_Name}}</td>
        <td>{{Middle_Initial}}</td>
        <td>{{Last_Name}}</td>
        <td>{{Gender}}</td>
        <td>{{Email}}</td>
        <td><button type="button"
            class="btn btn-light mr-1"
             data-bs-dismiss="modal"
            @click="details(Emp_ID,First_Name,Middle_Initial,Last_Name,Gender,Email)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button></td>
        </tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>

</div>
`,

data(){
    return{
        csv:[],
        modalTitle:"",
        Emp_ID:"",
        Name_Prefix:"",
        First_Name:0,
        Middle_Initial:"",
        Last_Name:"",
        Gender:"",
        Email:"",
        Father_Name:"",
        Mother_Name:"",

        departmentWithoutFilter:[]


    }
},

methods:{
    details(a,b,c,d,e,f){
    this.ary = [a,b,c,d,e,f]
    this.$router.push({name:"revisit",params:{id:this.ary}})
    },

    refreshData(){
        axios.get(variables.API_URL+"csv")
        .then((response)=>{
            this.csv=response.data;
            this.EmpIdFilterWithoutFilter=response.data;
        });
    },

    ViewClick(dep){
        this.modalTitle="content";
        this.Emp_ID = dep.Emp_ID ;
        this.Name_Prefix = dep.Name_Prefix;
        this.First_Name = dep.First_Name;
        this.Middle_Initial = dep.Middle_Initial;
        this.Last_Name = dep.Last_Name;
        this.Gender = dep.Gender
        this.Email = dep.Email;

    },

    FilterFn(){
        var FilterVariable=this.FilterVariable;

        this.csv=this.EmpIdFilterWithoutFilter.filter(
            function(el){
                return (el.First_Name.toString().toLowerCase().includes(
                    FilterVariable.toString().trim().toLowerCase()
                ) || el.Email.toString().toLowerCase().includes(
                    FilterVariable.toString().trim().toLowerCase()
                )) || el.Last_Name.toString().toLowerCase().includes(
                    FilterVariable.toString().trim().toLowerCase()
                )
            });
    },
},
mounted:function(){
    this.refreshData();
}

}