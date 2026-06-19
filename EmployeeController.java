package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    List<Employee> employees = new ArrayList<>();

    public EmployeeController() {
        employees.add(new Employee(1, "Apoorva", 50000));
        employees.add(new Employee(2, "Rahul", 45000));
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employees;
    }

    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable int id) {

        for(Employee e : employees) {
            if(e.getId() == id) {
                return e;
            }
        }

        return null;
    }

    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {

        employees.add(employee);
        return employee;
    }

    @PutMapping("/{id}")
    public String updateEmployee(@PathVariable int id,
                                 @RequestBody Employee updatedEmployee) {

        for(Employee e : employees) {

            if(e.getId() == id) {

                e.setName(updatedEmployee.getName());
                e.setSalary(updatedEmployee.getSalary());

                return "Employee Updated Successfully";
            }
        }

        return "Employee Not Found";
    }

    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable int id) {

        Iterator<Employee> iterator = employees.iterator();

        while(iterator.hasNext()) {

            Employee e = iterator.next();

            if(e.getId() == id) {

                iterator.remove();
                return "Employee Deleted Successfully";
            }
        }

        return "Employee Not Found";
    }
}