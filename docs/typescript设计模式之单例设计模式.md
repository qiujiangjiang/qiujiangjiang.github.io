---
title: typescript设计模式之单例设计模式
tags:
  - 设计模式
  - typescript
category: typescript
abbrlink: fa6ba0d9
date: 2023-02-20 23:39:17
---
如果一个类只能有一个实例，并且之后会多次调用创建调用的这个类，调用的依然是那个实例，那么就需要使用单例设计模式。
同时单例设计模式，又分有多种设计模式，比较常用是就是懒汉式设计模式和饿汉设计模式。
# 懒汉设计模式
顾名思义，懒汉设计模式，如果没有调用时，那么懒汉不会进行实例化类。
```typescript
class 敌人管理器 {
    private static instance: 敌人管理器;
    private constructor() { }

    public static getInstance() {
        if (敌人管理器.instance == null) {
            敌人管理器.instance = new 敌人管理器();
        }
        return 敌人管理器.instance;
    }
}
```

1. 敌人管理器类的实例化还是只允许有一个，那么懒汉设计模式如何实现的呢？
2. 首先我们在敌人管理器类内部声明一个静态私有变量instance 类型就是敌人管理器类，但是不需要初始化。
3. 我们创建一个静态的公开方法 getInstance 如果以后创建类调用类只能使用类内部的静态方法。
4. getInstance 内部就是一个简单的判断逻辑，如果instance没有初始化，那么就new 一个敌人管理器类 赋值给instance。但是最终都会返回同一个instance

为什么这样就是一个懒汉模式呢?代码执行的时候虽然内部进行了声明，但是没有进行初始化，只有在第一次调用创建实例的时候才会赋值，这样也就避免了不管用不用这个类，都直接进行初始化浪费内存。



# 饿汉设计模式
相较于懒汉设计模式，饿汉设计模式就相比较简单多了，不管有没有先吃了再说！！
```typescript
class 敌人管理器 {
    private static instance: 敌人管理器 = new 敌人管理器();
    
    private constructor() {
      this.a = 1
    }
    public static getInstance(): 敌人管理器 {
        return this.instance;
    }
}
```

1. 首先我们创建了一个敌人管理类，这个类用于管理游戏中的敌人，很显然这个类只需要一个。
2. 那么我们如何保证整个类不管怎么创建只有一个实例呢。
3. 我们在类的内部创建一个静态变量 instance 并且实例一个敌人管理器赋值给 instance
4. 接着我们创建一个静态方法 getInstance 我们想要获取实例只能通过这个方法,很显然这个返回的就是instance

为什么会造成这样的现象，因为一开始执行代码时，类加载就会进行初始化，也就是将敌人管理器实例化赋值给instance(很常用的单例模式，执行效率比较高，同时执行就加载也就带来了浪费内存)
