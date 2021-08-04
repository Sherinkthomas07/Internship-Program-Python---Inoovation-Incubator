const revisit= {template:`

Name_Prefix = {{this.$route.params.id[0]}}
First_Name =  {{this.$route.params.id[1]}}
Middle_Initial = {{this.$route.params.id[2]}}
Last_Name = {{this.$route.params.id[3}}
Gender =    {{this.$route.params.id[4]}}
Email = {{this.$route.params.id[6]}}
Father_Name =   {{this.$route.params.id[7]}}
Mother_Name =   {{this.$route.params.id[8]}}

<div>
    <div>
        <header class="head-form">
            <h2>Personal Details</h2>
        </header>
    </div>
     <div class="input-group mb-3">
        <span class="input-group-text">Name_Prefix</span>
        <input type="text" class="form-control" :value="Name_Prefix">
    </div>

    <div class="input-group mb-3">
        <span class="input-group-text">First_Name</span>
        <input type="text" class="form-control" :value="First_Name">
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text">Middle_Initial</span>
        <input type="text" class="form-control" :value="Middle_Initial">
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text">Last_Name</span>
        <input type="text" class="form-control" :value="Last_Name">
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text">Gender</span>
        <input type="text" class="form-control" :value="Gender">
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text">Email</span>
        <input type="text" class="form-control" :value="Email">
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text">Father_Name</span>
        <input type="text" class="form-control" :value="Father_Name">
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text">Mother_Name</span>
        <input type="text" class="form-control" :value="Mother_Name">
    </div>
</div>


`}