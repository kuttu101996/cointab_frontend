import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/userProvider";

function Card({ ele }) {
  const { setUser } = useContext(UserContext);
  const [isPresent, setIsPresent] = useState(false);
  ele = { posts: [{}], ...ele };

  const addUser = async () => {
    await fetch(`https://cointab-backend-uwqe.onrender.com/users/insert-user`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(ele),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.message === "Success") {
          setIsPresent(true);
          setUser(ele);
        } else if (result.message === "User already exists") {
          alert(`User Exists`);
          setIsPresent(true);
          setUser(ele);
        }
      });
  };

  return (
    <div className="border border-gray-200 mx-auto p-8 w-80">
      {/* <section class="mx-auto w-full max-w-7xl px-4 py-4">
        <div class="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 class="text-lg font-semibold">Employees</h2>
            <p class="mt-1 text-sm text-gray-700">The list of all employees.</p>
          </div>
        </div>
        <div class="mt-6 flex flex-col">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr class="divide-x divide-gray-200">
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span>Employee</span>
                      </th>
                      <th
                        scope="col"
                        class="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Role
                      </th>
                      <th scope="col" class="relative px-4 py-3.5">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr class="divide-x divide-gray-200">
                      <td class="whitespace-nowrap px-4 py-4">
                        <div class="flex items-center">
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                              John Doe
                            </div>
                            <div class="text-sm text-gray-500">
                              john@devui.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="whitespace-nowrap px-12 py-4">
                        <div class="text-sm text-gray-900">
                          Front-end Developer
                        </div>
                        <div class="text-sm text-gray-500">Engineering</div>
                      </td>
                      <td class="whitespace-nowrap px-4 py-4">
                        <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          Active
                        </span>
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                        Developer
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                        <a href="#" class="text-gray-500 hover:text-indigo-600">
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr class="divide-x divide-gray-200">
                      <td class="whitespace-nowrap px-4 py-4">
                        <div class="flex items-center">
                          <div class="h-10 w-10 flex-shrink-0">
                            <img
                              class="h-10 w-10 rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"
                              alt=""
                            />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                              Jane Doe
                            </div>
                            <div class="text-sm text-gray-500">
                              jane@devui.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="whitespace-nowrap px-12 py-4">
                        <div class="text-sm text-gray-900">
                          Back-end Developer
                        </div>
                        <div class="text-sm text-gray-500">Engineering</div>
                      </td>
                      <td class="whitespace-nowrap px-4 py-4">
                        <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          Active
                        </span>
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                        CTO
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                        <a href="#" class="text-gray-500 hover:text-indigo-600">
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4 w-full border-gray-300">
          <div class="mt-2 flex items-center justify-end">
            <div class="space-x-2">
              <button
                type="button"
                class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                ← Previous
              </button>
              <button
                type="button"
                class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </section> */}
      <div className="flex mb-1 justify-between">
        <p className="text-left text-sm font-normal text-gray-500">Name :</p>
        <p className="text-sm ml-3 font-medium text-gray-900"> {ele.name}</p>
      </div>
      <div className="flex mb-1 justify-between">
        <p className="text-left text-sm font-normal text-gray-500">Email :</p>
        <p className="text-sm ml-3 font-medium text-gray-900"> {ele.email}</p>
      </div>
      <div className="flex mb-1 justify-between">
        <p className="text-left text-sm font-normal text-gray-500">Phone :</p>
        <p className="text-sm ml-3 font-medium text-gray-900"> {ele.phone}</p>
      </div>
      <div className="flex mb-1 justify-between">
        <p className="text-left text-sm font-normal text-gray-500">Website :</p>
        <p className="text-sm ml-3 font-medium text-gray-900"> {ele.website}</p>
      </div>
      <div className="flex mb-1 justify-between">
        <p className="text-left text-sm font-normal text-gray-500">City :</p>
        <p className="text-sm ml-3 font-medium text-gray-900">
          {ele.address.city}
        </p>
      </div>
      <div className="flex mb-1 justify-between">
        <p className="text-left text-sm font-normal text-gray-500">Company :</p>
        <p className="text-sm ml-3 font-medium text-gray-900">
          {ele.company.name}
        </p>
      </div>
      <div className="flex w-full justify-end">
        {isPresent ? (
          <button
            type="button"
            className="rounded-lg m-3 px-3 py-2 text-sm font-semibold text-white shadow-sm bg-black hover:bg-black/80
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <Link to={`/post/${ele.id}`}>Open</Link>
          </button>
        ) : (
          <button
            type="button"
            onClick={addUser}
            className="rounded-lg mt-2 w-32 bg-orange-800 hover:bg-orange-700 px-3 py-2 text-sm font-semibold text-white shadow-sm 
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
