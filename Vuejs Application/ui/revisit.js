const revisit= {template:`

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
        <td>{{this.$route.params.id[0]}}</td>
        <td>{{this.$route.params.id[1]}}</td>
        <td>{{this.$route.params.id[2]}}</td>
        <td>{{this.$route.params.id[3]}}</td>
        <td>{{this.$route.params.id[4]}}</td>
        <td>{{this.$route.params.id[5]}}</td>


    </tr>
</tbody>
</table>

`}