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
                    Email
                </th>
                <th>
                    View
                </th>
                <th>
                    Pop Up
                </th>
                <th>
                    Edit
                </th>
                <th>
                    Delete
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
                <td>{{x.Email}}</td>
                <td>
                    <button type="button"
                        class="btn btn-light mr-1"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                        data-bs-dismiss="modal"
                        @click="ViewClick(x.Emp_ID,x.Name_Prefix,x.First_Name,x.Middle_Initial,x.Last_Name,x.Gender,x.Email,x.Father_Name,x.Mother_Name)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">
                                <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                    </button>
                </td>
                <td>
                    <button type="button"
                        class="btn btn-light mr-1"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        @click="Popup(x)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                                <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                    </button>
                </td>
                <td>
                    <button type="button"
                        class="btn btn-light mr-1"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                        @click="EditClick(x)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="class=bi bi-pencil-fill" viewBox="0 0 16 16">
                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                    </button>
                </td>
                <td>
                    <button type="button"
                        class="btn btn-light mr-1"
                        data-bs-toggle="modal"
                        @click="DeleteClick(x)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                    </button>
                </td>
            </tr>
        </tbody>
        </thead>
    </table>

    <div class="modal fade" id="exampleModal" tabindex="-1"
		aria-labelledby="exampleModalLabel" aria-hidden="true">
	        <div class="modal-dialog modal-lg modal-dialog-centered">
	            <div class="modal-content">
		            <div class="modal-header">
			            <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
			                <button type="button" class="btn-close" data-bs-dismiss="modal"
			                    aria-label="Close">
			                </button>
		            </div>
		            <div class="modal-body">
		                <div class="d-flex flex-row bd-highlight mb-3">
			                <div class="p-2 w-50 bd-highlight">
			                    <div>
				                    <header class="head-form">
                                        <h2>Personal Details</h2>
                                    </header>
                                </div>
				                 <div class="input-group mb-3">
					                <span class="input-group-text">Name_Prefix</span>
					                <input type="text" class="form-control" v-model="Name_Prefix">
				                </div>

				                <div class="input-group mb-3">
					                <span class="input-group-text">First_Name</span>
					                <input type="text" class="form-control" v-model="First_Name">
				                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Middle_Initial</span>
                                    <input type="text" class="form-control" v-model="Middle_Initial">
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Last_Name</span>
                                    <input type="text" class="form-control" v-model="Last_Name">
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Gender</span>
                                    <input type="text" class="form-control" v-model="Gender">
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Email</span>
                                    <input type="text" class="form-control" v-model="Email">
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Father_Name</span>
                                    <input type="text" class="form-control" v-model="Father_Name">
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Mother_Name</span>
                                    <input type="text" class="form-control" v-model="Mother_Name">
                                </div>
                            </div>
                        </div>
			        </div>
                </div>
		    </div>

     </div>

    <div class="modal fade" id="exampleModal1" tabindex="-1"
		aria-labelledby="exampleModalLabel" aria-hidden="true">
	        <div class="modal-dialog modal-lg modal-dialog-centered">
	            <div class="modal-content">
		            <div class="modal-header">
			            <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
			                <button type="button" class="btn-close" data-bs-dismiss="modal"
			                    aria-label="Close">
			                </button>
		            </div>
		            <div class="modal-body">
		                <div class="d-flex flex-row bd-highlight mb-3">
			                <div class="p-2 w-50 bd-highlight">
			                    <div>
				                    <header class="head-form">
                                        <h2>Edit Personal Details</h2>
                                    </header>
                                </div>
				                 <div class="input-group mb-3">
					                <span class="input-group-text">Name_Prefix</span>
					                <input type="text" class="form-control" v-model="Name_Prefix">
				                </div>

				                <div class="input-group mb-3">
					                <span class="input-group-text">First_Name</span>
					                <input type="text" class="form-control" v-model="First_Name">
				                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Middle_Initial</span>
                                    <input type="text" class="form-control" v-model="Middle_Initial">
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Last_Name</span>
                                    <input type="text" class="form-control" v-model="Last_Name">
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Gender</span>
                                    <input type="text" class="form-control" v-model="Gender">
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Email</span>
                                    <input type="text" class="form-control" v-model="Email">
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Father_Name</span>
                                    <input type="text" class="form-control" v-model="Father_Name">
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Mother_Name</span>
                                    <input type="text" class="form-control" v-model="Mother_Name">
                                </div>
                                <div>
                                    <button type="button" @click="updateClick()" data-bs-dismiss="modal""
			                        class="btn btn-primary">
			                        Save
			                        </button>
		                         </div>
                            </div>
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
        First_Name:"",
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

    refreshData(){
        axios.get(variables.API_URL+"csv")
        .then((response)=>{
            this.csv=response.data;
            this.EmpIdFilterWithoutFilter=response.data;
        });
    },

    ViewClick(Emp_ID,Name_Prefix,First_Name,Middle_Initial,Last_Name,Gender,Email,Father_Name,Mother_Name)
    {
        this.ary = [Emp_ID,Name_Prefix,First_Name,Middle_Initial,Last_Name,Gender,Email,Father_Name,Mother_Name];
        this.$router.push({name:"revisit",params:{id:this.ary}});
    },

    Popup(x){
        this.modalTitle="content";
        this.Emp_ID = x.Emp_ID ;
        this.Name_Prefix = x.Name_Prefix;
        this.First_Name = x.First_Name;
        this.Middle_Initial = x.Middle_Initial;
        this.Last_Name = x.Last_Name;
        this.Gender = x.Gender
        this.Email = x.Email;
        this.Father_Name = x.Father_Name;
        this.Mother_Name = x.Mother_Name;

    },
     EditClick(x){
        this.modalTitle="content";
        this.Emp_ID = x.Emp_ID ;
        this.Name_Prefix = x.Name_Prefix;
        this.First_Name = x.First_Name;
        this.Middle_Initial = x.Middle_Initial;
        this.Last_Name = x.Last_Name;
        this.Gender = x.Gender
        this.Email = x.Email;
        this.Father_Name = x.Father_Name;
        this.Mother_Name = x.Mother_Name;
    },
    updateClick(){
        axios.put(variables.API_URL+"csv",{
            Emp_ID:this.Emp_ID,
            Name_Prefix:this.Name_Prefix,
            First_Name:this.First_Name,
            Middle_Initial:this.Middle_Initial,
            Last_Name:this.Last_Name,
            Gender:this.Gender,
            Email:this.Email,
            Father_Name:this.Father_Name,
            Mother_Name:this.Mother_Name
        })
        .then((response)=>{
           this.refreshData();
           alert(response.data);
        });
    },
        DeleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        axios.delete(variables.API_URL+"csv/"+id.Emp_ID)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });

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