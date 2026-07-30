## The Story of Software Architecture



**Phase 1: Small Applications (1970s-1990s)**



Back then, applications were relatively small.

Imagine building an **online bookstore.**

Everything lived in one application.



Application

│

├── Login

├── Users

├── Products

├── Orders

├── Payments

└── Admin

##### 

##### One codebase.

##### One deployment.

##### One database.



This is what we now call a **monolith**.

For small applications, this is actually an excellent architecture.

There was no problem.

\-----------------------------------------------------------------------



### Phase 2: The Internet Explodes (Late 1990s - 2005)



Companies like Amazon, Google, eBay and Yahoo started getting millions of users.

Suddenly the monolith became huge.

Application



├── 300 Controllers

├── 900 Services

├── Thousands of Models

├── Millions of Lines of Code

└── Hundreds of Developers



Now new problems appeared.



#### Problem 1: Everyone works in the same codebase



Imagine 150 developers.

Developer A edits Login.

Developer B edits Orders.

Developer C edits Payments.

Developer D edits Products.

All inside one project.

Every day there are merge conflicts.

People accidentally break each other's work.

Development slows dramatically.



#### Problem 2: Deployment becomes painful



Suppose you only changed one line.

&#x20;  **"Fix typo on Login page"**



Can you deploy only Login?

**No.....**



You must deploy the entire application.

Users

Orders

Products

Payments

Invoices

Reports

Admin



Everything.



One tiny bug fix means redeploying the whole system.

If deployment fails...

Everything is affected.



#### Problem 3: One bug crashes everything



Imagine the Payment module has a memory leak.

Memory reaches 100%.

The process crashes.

What happens?



**\[\[\[\[\[\[\[\[\[\[**  



**Now what is memory leak ?**



A program keeps using RAM but doesn't release the memory that is no longer needed.

Example:



Request 1 → Uses 10 MB of RAM 

The request finishes, but the 10 MB is not released 

Request 2 → Uses another 10 MB

Request 3 → Uses another 10 MB



**Eventually:**



**10 MB**

**20 MB**

**50 MB**

**200 MB**

**1 GB**

**2 GB**

**...**

**RAM Full  ]]]]]]]]]]**





**Now if memory reaches to 100%, then what happens ?**


**No Login** 

**No Products** 

**No Orders** 

**No Payments** 



Everything goes down because everything runs inside the same process.





#### Problem 4: Fear of changing code



Imagine the application has existed for ten years.

Nobody knows all of it.

You change one function.

Three unrelated features stop working.

Now developers become afraid to touch old code.

This is common in large monoliths.





\----------------------------------------------------------------------



### Around 2005-2012



Companies like:



Amazon

Netflix

Google



were growing extremely.

They needed a different approach.

Instead of one huge application...

they started breaking applications into many smaller services.



they built



User Service

├── Authentication



Product Service

├── Product Catalog



Payment Service

├── Payment Processing



Notification Service

├── Email \& Push Notifications



Order Service

├── Order Management



Inventory Service

└── Stock Management







Each service became its own application.

Each could be built, deployed and scaled independently.

This idea evolved into what we now call microservices.







