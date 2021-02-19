#include <sys/wait.h>

#include <unistd.h>

#include <stdlib.h>

#include <stdio.h>

#include <string.h>

int help(char **args);

int builtinexit(char **args);

int builtinhistory(char **args);

int tma(char **args);

int tol(char **args);

int toh(char **args);

int ta(char **args);

int pma(char **args);

int pol(char **args);

int poh(char **args);

int url(char **args);

int hour(char **args);

int room(char **args);

int desp(char **args);

int text(char **args);

int ref(char **args);

int prof(char **args);

char *builtin_str[] = {

"url",

"hour",

"room",

"desp",

"text",

"ref",

"prof",

"pol",

"poh",

"pma",

"ta",

"tol",

"toh",

"tma",

"history",

"help",

"exit"

};

char *hist_builtincmd[20];

int (builtin_func[]) (char *) = {

&url,

&hour,

&room,

&desp,

&text,

&ref,

&prof,

&pol,

&poh,

&pma,

&ta,

&tol,

&toh,

&tma,

&builtinhistory,

&help,

&builtinexit

};

int num_builtins() {

return sizeof(builtin_str) / sizeof(char *);

}

int builtinhistory(char **args)

{

int i;

for (i = 0; hist_builtincmd[i]; i++)

printf("%s\n", hist_builtincmd[i]);

return 1;

}

int tma(char **args)

{

printf("PaulAllen@ppp.com\n");

return 1;

}

int toh(char **args)

{

printf("08:00 AM to 04:00 PM\n");

return 1;

}

int tol(char **args)

{

printf("New Jersey, United States\n");

return 1;

}

int ta(char **args)

{

printf("Paul Allen\n");

return 1;

}

int pma(char **args)

{

printf("DennisRitchie@ppp.com\n");

return 1;

}

int poh(char **args)

{

printf("08:00 AM to 04:00 PM\n");

return 1;

}

int pol(char **args)

{

printf("New Jersey, United States\n");

return 1;

}

int prof(char **args)

{

printf("Dennis Ritchie\n");

return 1;

}

int ref(char **args)

{

printf("The C programming book by Dennis Ritchie\n");

return 1;

}

int text(char **args)

{

printf("Introduction to Algorithm\n");

printf("Operating system concepts\n");

printf("Computer Networks\n");

printf("Compilers\n");

return 1;

}

int desp(char **args)

{

printf("Chegg covers all the doubt related to computer science\n");

return 1;

}

int room(char **args)

{

printf("All Classes are in CS403\n");

return 1;

}

int hour(char **args)

{

printf("8:00-10:00 AM\n");

printf("11:00-12:00 AM\n");

printf("01:00-02:00 PM\n");

printf("03:00-04:00 PM\n");

return 1;

}

int url(char **args)

{

printf("http://www.chegg.com\n");

return 1;

}

int help(char **args)

{

int i;

printf("The following are built in:\n");

for (i = 0; i < num_builtins(); i++) {

printf(" %s\n", builtin_str[i]);

}

printf("Use the man command for information on other programs.\n");

return 1;

}

int builtinexit(char **args)

{

return 0;

}

int execute(char **args)

{

int i;

static int j;

if (args[0] == NULL) {

return 1;

}

if (j >= 20)

j = 0;

for (i = 0; i < num_builtins(); i++) {

if (strcmp(args[0], builtin_str[i]) == 0) {

hist_builtincmd[j] = builtin_str[i];

j++;

return (*builtin_func[i])(args);

}

}

return launch(args);

}

int launch(char **args)

{

pid_t pid, wpid;

int status;

pid = fork();

if (pid == 0) {

// Child

if (execvp(args[0], args) == -1) {

perror("CSC4420shell");

}

exit(EXIT_FAILURE);

} else if (pid < 0) {

perror("CSC4420shell");

} else {

// Parent

do {

wpid = waitpid(pid, &status, WUNTRACED);

} while (!WIFEXITED(status) && !WIFSIGNALED(status));

}

return 1;

}

#define LSH_TOK_BUFSIZE 64

#define LSH_TOK_DELIM " \t\r\n\a"

char *split_line(char line)

{

int bufsize = LSH_TOK_BUFSIZE, position = 0;

char *tokens = malloc(bufsize sizeof(char*));

char *token;

if (!tokens) {

fprintf(stderr, "CSC4420shell: allocation error\n");

exit(EXIT_FAILURE);

}

token = strtok(line, LSH_TOK_DELIM);

while (token != NULL) {

tokens[position] = token;

position++;

if (position >= bufsize) {

bufsize += LSH_TOK_BUFSIZE;

tokens = realloc(tokens, bufsize * sizeof(char*));

if (!tokens) {

fprintf(stderr, "lsh: allocation error\n");

exit(EXIT_FAILURE);

}

}

token = strtok(NULL, LSH_TOK_DELIM);

}

tokens[position] = NULL;

return tokens;

}

char *line_reading(void)

{

int i = 0;

char buffer = (char )malloc(1024);

int ch;

while (1) {

ch = getchar();

if (ch == EOF || ch == '\n') {

buffer[i] = '\0';

return buffer;

} else {

buffer[i] = ch;

}

i++;

if (i >= 1024) {

printf("input is too long more than 1024\n");

exit(EXIT_FAILURE);

}

}

}

int main(int argc, char **argv)

{

char *line;

char **args;

int status;

do {

printf("CSC4420Shell$");

line = line_reading();

args = split_line(line);

status = execute(args);

free(line);

free(args);

} while (status);

return 0;

}