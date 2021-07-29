const csv={template:`
<div>

<table class="table table-striped">
<thead>
    <tr>
        <th>
            
            <div class="d-flex flex-row">

            <input class="form-control m-2"
                v-model="DepartmentIdFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
            </div>
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
    </tr>
</thead>
<tbody>
    <tr v-for="x in csv">
        <td>{{x.Emp_Id}}</td>
        <td>{{x.Name_Prefix}}</td>
        <td>{{x.First_Name}}</td>
        <td>{{x.Middle_Initial}}</td>
        <td>{{x.Last_Name}}</td>
        <td>{{x.Gender}}</td>
        <td>{{x.Email}}</td>
        <td>{{x.Father_Name}}</td>
        <td>{{x.Mother_Name}}</td>



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
        aria-label="Close"></button>
    </div>

    <div class="modal-body">

        <div class="input-group mb-3">
            <span class="input-group-text">Department Name</span>
            <input type="text" class="form-control" v-model="DepartmentName">
        </div>

        <button type="button" @click="createClick()"
        v-if="DepartmentId==0" class="btn btn-primary">
        Create
        </button>
        <button type="button" @click="updateClick()"
        v-if="DepartmentId!=0" class="btn btn-primary">
        Update
        </button>

    </div>

</div>
</div>
</div>


</div>


`,

data(){
    return{
        csv:[],
        Emp_Id:"",
        Name_Prefix:"",
        First_Name:0,
        Middle_Initial:"",
        Last_Name:"",
        Gender:"",
        Email:"",
        Father_Name:"",
        Mother_Name:"",
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"dataview")
        .then((response)=>{
            this.csv=response.data;
            this.csvWithoutFilter=response.data;
        });
    },
    addClick(){
        this.modalTitle="Add Department";
        this.DepartmentId=0;
        this.DepartmentName="";
    },
    editClick(dep){
        this.modalTitle="Edit Department";
        this.DepartmentId=dep.DepartmentId;
        this.DepartmentName=dep.DepartmentName;
    },
    createClick(){
        axios.post(variables.API_URL+"department",{
            DepartmentName:this.DepartmentName
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    updateClick(){
        axios.put(variables.API_URL+"department",{
            DepartmentId:this.DepartmentId,
            DepartmentName:this.DepartmentName
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    deleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        axios.delete(variables.API_URL+"department/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });

    },
    FilterFn(){
        var DepartmentIdFilter=this.DepartmentIdFilter;
        var DepartmentNameFilter=this.DepartmentNameFilter;

        this.departments=this.departmentsWithoutFilter.filter(
            function(el){
                return el.DepartmentId.toString().toLowerCase().includes(
                    DepartmentIdFilter.toString().trim().toLowerCase()
                )&&
                el.DepartmentName.toString().toLowerCase().includes(
                    DepartmentNameFilter.toString().trim().toLowerCase()
                )
            });
    },
    sortResult(prop,asc){
        this.departments=this.departmentsWithoutFilter.sort(function(a,b){
            if(asc){
                return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
            }
            else{
                return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
            }
        })
    }

},
mounted:function(){
    this.refreshData();
}

}