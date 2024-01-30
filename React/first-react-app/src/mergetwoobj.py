from collections import defaultdict


projects = [
    {"project_name": "test project", "hours": 2600},
    {"project_name": "test project", "hours": 2600},
    {"project_name": "test project2", "hours": 2600},
    {"project_name": "test project2", "hours": 2600},
    {"project_name": "test project", "hours": 2600}
]

# [
#     {
#         "project_name": "test project", 
#         "count": 3
#         "hours": 7800
#     }, 
# ...
# ]

def mergeProjects(project_list):
    project_default = defaultdict(lambda: {"count": 0, "hours": 0})

    for project in project_list:
        project_name = project["project_name"]
        hours = project["hours"]
        project_default[project_name]["count"] += 1
        project_default[project_name]["hours"] += hours

    result = [{"project_name": name, "count": summary["count"], "hours": summary["hours"]}
            for name, summary in project_default.items()]
    
    return result

print(mergeProjects(projects))