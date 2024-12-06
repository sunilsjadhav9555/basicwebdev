Microsoft Windows [Version 10.0.22631.4460]
(c) Microsoft Corporation. All rights reserved.

C:\Users\user>jshell
|  Welcome to JShell -- Version 23.0.1
|  For an introduction type: /help intro

jshell> 5 * 5
$1 ==> 25

jshell> 5 * 1
$2 ==> 5

jshell> 5 + 5
$3 ==> 10

jshell> 5 / 5
$4 ==> 1

jshell> 6 - 1
$5 ==> 5

jshell> 10 % 1
$6 ==> 0

jshell> 10 % 2
$7 ==> 0

jshell> 10 % 3
$8 ==> 1

jshell> 5 + 5 + 5 + 6
$9 ==> 21

jshell> (5 * 5) - 10
$10 ==> 15

jshell> 24 * 60
$11 ==> 1440

jshell> 1440 * 60
$12 ==> 86400

jshell> System.out.println(3 * 4)
12

jshell> int a = 10;
a ==> 10

jshell> int a = 10; int b = 10;int sum; sum = a + b; System.out.println(sum)

a ==> 10
b ==> 10
sum ==> 0
sum ==> 20
20

jshell> System.out.println("hello");
hello

jshell> System.out.println("5 * 3");
5 * 3

jshell> Systm.out.println("5 * 3 = 15");
|  Error:
|  package Systm does not exist
|  Systm.out.println("5 * 3 = 15");
|  ^-------^

jshell> System.out.println("5 * 3 = 15");
5 * 3 = 15

jshell> System.out.println("60 * 60 * 24 " =);
|  Error:
|  illegal start of expression
|  System.out.println("60 * 60 * 24 " =);
|                                      ^

jshell> System.out.println(60 * 60 * 24);
86400

jshell> System.out.println(5 * 3);
15

jshell> System.out.println(hello \n world);
|  Error:
|  illegal character: '\'
|  System.out.println(hello \n world);
|                           ^

jshell> System.out.println("hello \n world");
hello
 world

jshell> System.out.println("hello \nworld");
hello
world

jshell> System.out.println("hello \\world");
hello \world

jshell> math.random()
|  Error:
|  cannot find symbol
|    symbol:   variable math
|  math.random()
|  ^--^

jshell> Math.random()
$28 ==> 0.5823226135938488

jshell> Math.random(1)
|  Error:
|  method random in class java.lang.Math cannot be applied to given types;
|    required: no arguments
|    found:    int
|    reason: actual and formal argument lists differ in length
|  Math.random(1)
|  ^---------^

jshell> Math.min(23,45)
$29 ==> 23

jshell> Math.max(23,45)
$30 ==> 45

jshell> System.out.println("5 * 3 = %d" 5 * 3);
|  Error:
|  ')' or ',' expected
|  System.out.println("5 * 3 = %d" 5 * 3);
|                                 ^

jshell> System.out.println("5 * 3 = %d", 5 * 3);
|  Error:
|  no suitable method found for println(java.lang.String,int)
|      method java.io.PrintStream.println() is not applicable
|        (actual and formal argument lists differ in length)
|      method java.io.PrintStream.println(boolean) is not applicable
|        (actual and formal argument lists differ in length)
|      method java.io.PrintStream.println(char) is not applicable
|        (actual and formal argument lists differ in length)
|      method java.io.PrintStream.println(int) is not applicable
|        (actual and formal argument lists differ in length)
|      method java.io.PrintStream.println(long) is not applicable
|        (actual and formal argument lists differ in length)
|      method java.io.PrintStream.println(float) is not applicable
|        (actual and formal argument lists differ in length)
|      method java.io.PrintStream.println(double) is not applicable
|        (actual and formal argument lists differ in length)
|      method java.io.PrintStream.println(char[]) is not applicable
|        (actual and formal argument lists differ in length)
|      method java.io.PrintStream.println(java.lang.String) is not applicable
|        (actual and formal argument lists differ in length)
|      method java.io.PrintStream.println(java.lang.Object) is not applicable
|        (actual and formal argument lists differ in length)
|  System.out.println("5 * 3 = %d", 5 * 3);
|  ^----------------^

jshell> System.out.printf("5 * 3 = %d", 5 * 3).println();
5 * 3 = 15

jshell> System.out.printf("%d * %d = %d", 5 * 3).println();
15 * |  Exception java.util.MissingFormatArgumentException: Format specifier '%d'
|        at Formatter.format (Formatter.java:2800)
|        at PrintStream.implFormat (PrintStream.java:1369)
|        at PrintStream.format (PrintStream.java:1348)
|        at PrintStream.printf (PrintStream.java:1247)
|        at (#32:1)

jshell> System.out.printf("%d * %d = %d",5,3, 5 * 3).println();
5 * 3 = 15

jshell> System.out.printf("%d * %d * %d = %d",5,3,2, 5 * 3 * 2).println();
5 * 3 * 2 = 30


jshell>